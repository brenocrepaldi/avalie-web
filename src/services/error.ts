import { toast } from 'sonner';

export function handleErrorResponse(response: Response) {
	if (response.status === 400) {
		toast.error('Usuário não encontrado');
	} else if (response.status === 401) {
		toast.error('Credenciais incorretas. Verifique seu e-mail e senha.');
	} else if (response.status === 500) {
		toast.error('Erro no servidor. Tente novamente mais tarde.');
	} else toast.error('Erro ao realizar a operação. Tente novamente.');
}
