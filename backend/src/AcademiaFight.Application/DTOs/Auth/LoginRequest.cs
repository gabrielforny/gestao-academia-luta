namespace AcademiaFight.Application.DTOs.Auth;

public class LoginRequest
{
    // Aceita e-mail ou telefone (dígitos brutos ou formatado com máscara)
    public string EmailOuTelefone { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty; // compatibilidade com web existente
    public string Senha { get; set; } = string.Empty;
}
