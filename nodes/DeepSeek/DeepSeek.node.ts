import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { chatFields, chatOperations, fimOperations } from './ChatDescription';

export class DeepSeek implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DeepSeek',
		name: 'deepSeek',
		// hidden: true,
		icon: { light: 'file:DeepSeek.svg', dark: 'file:DeepSeek.svg' },
		group: ['transform'],
		version: [1, 1.1],
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume DeepSeek AI',
		defaults: {
			name: 'DeepSeek',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'deepSeekApi',
				required: true,
			},
		],
		requestDefaults: {
			ignoreHttpStatusErrors: true,
			baseURL: 'https://api.deepseek.com',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Chat',
						value: 'chat'
					},
					{
						name: 'FIM',
						value: 'fim'
					}
				],
				default: 'chat',
			},

			...chatOperations,
			...fimOperations,
			...chatFields
		],
	};
}
