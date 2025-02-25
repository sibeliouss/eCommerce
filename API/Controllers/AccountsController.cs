using API.Dtos;
using API.Entity;
using API.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountsController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly TokenService _token;
    public AccountsController(UserManager<AppUser> userManager, TokenService token)
    {
        _userManager=userManager;
        _token= token;
    }
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto model)
    {
        var user= await _userManager.FindByNameAsync(model.UserName);
        if(user== null)
        {
            return BadRequest(new ProblemDetails {Title= "username hatalı"});  
        }
        var result = await _userManager.CheckPasswordAsync(user, model.Password);
        if(result)
        {
            return Ok(new UserDto {
                Name= user.Name!,
                Token= await _token.GenerateToken(user)});
        }
        return Unauthorized();
    } 

     [HttpPost("register")]
     public async Task<IActionResult> CreateUser(RegisterDto model)
    {
       if(!ModelState.IsValid){return BadRequest(ModelState);}

       var user= new AppUser {
        Name= model.Name,
        UserName=model.UserName,
        Email=model.Email}; 

        var result= await _userManager.CreateAsync(user, model.Password);
        if(result.Succeeded)
        {
            await _userManager.AddToRoleAsync(user, "Customer");
            return StatusCode(201);
        }
        return BadRequest(result.Errors);
    }
   
}
