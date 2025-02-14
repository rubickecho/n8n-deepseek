import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class DeepSeekApi implements ICredentialType {
	name = 'deepSeekApi';

	displayName = 'DeepSeek API';

	icon: Icon = { light: 'file:DeepSeek.svg', dark: 'file:DeepSeek-dark.svg' };

	documentationUrl = 'https://platform.deepseek.com/api-docs/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
		{
			displayName: 'baseUrl',
			name: 'baseUrl',
			type: 'string',
			typeOptions: { password: false },
			required: true,
			default: 'https://api.deepseek.com',
		}
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}'
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/models',
		},
	};
}
