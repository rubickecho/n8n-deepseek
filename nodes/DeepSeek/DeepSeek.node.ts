import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { chatFields, chatOperations } from './ChatDescription';
import { FIMFields, fimOperations } from './FIMDescription';

export class DeepSeek implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DeepSeek',
		name: 'deepSeek',
		// hidden: true,
		icon: { light: 'file:DeepSeek.svg', dark: 'file:DeepSeek-dark.svg' },
		group: ['transform'],
		version: 1,
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
			baseURL: 'http://host.docker.internal:1234/v1',
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
			...chatFields,
			...FIMFields
		],
	};
}
