using API.Data;
using API.Dtos;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class CartsController : ControllerBase
{
    private readonly DataContext _context;
    public CartsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<CartDto>> GetCart()
    {
        var cart = await GetOrCreate();

        return CartoDto(cart);
    }

    [HttpPost]
    public async Task<ActionResult> AddItemToCart(int productId, int quantity)
    {
       var cart= await GetOrCreate();
       var product= await _context.Products.FirstOrDefaultAsync(i=>i.Id==productId);
       
       if(product==null) return NotFound("The product is not in database.");

       cart.AddItem(product, quantity);
       var result= await _context.SaveChangesAsync()>0;
       if(result)
       return CreatedAtAction(nameof(GetCart), CartoDto(cart));

       return BadRequest(new ProblemDetails{Title="The product can not be added to cart."});

    }

    private async Task<Cart> GetOrCreate(){

         var cart = await _context.Carts
                    .Include(i => i.CartItems)
                    .ThenInclude(i => i.Product)
                    .Where(i => i.CustomerId == Request.Cookies["customerId"])
                    .FirstOrDefaultAsync();
        if(cart==null)
        {
          var customerId = Guid.NewGuid().ToString();

          var cookieOptions= new CookieOptions{
            Expires=DateTime.Now.AddMonths(1),
            IsEssential=true
          };
          Response.Cookies.Append("customerId", customerId, cookieOptions);
          cart = new Cart { CustomerId=customerId};

          _context.Carts.Add(cart);
          await _context.SaveChangesAsync();


        }
        return cart;

    }
    [HttpDelete]
    public async Task<ActionResult> DeleteItemFromCart(int productId, int quantity){
        var cart= await GetOrCreate();
        cart.DeleteItem(productId, quantity);
        var result= await _context.SaveChangesAsync()>0;
        if(result) return Ok();

        return BadRequest(new ProblemDetails { Title="Problem removing item from the cart."});

    }
    private CartDto CartoDto(Cart cart){
       return new CartDto {
        CartId=cart.CartId,
        CustomerId=cart.CustomerId,
        CartItems=cart.CartItems.Select(item=> new CartItemDto{
         ProductId=item.ProductId,
         Name=item.Product.Name,
         ImgUrl=item.Product.ImgUrl,
         Price=item.Product.Price,
         Quantity=item.Quantity
        }).ToList()
       };
    }
}