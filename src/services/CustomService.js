import { isArray } from '../lib/lodash';
import { BaseService } from './BaseService';
import axios from 'axios';

class CustomService extends BaseService {
	constructor(url) {
		super(url);
		this.connectorRequest = this.connectorRequest.bind(this);
		this.serviceNowRequest = this.serviceNowRequest.bind(this);
	}

	async connectorRequest(req) {
		const config = {
			baseURL: req.url,
			method: req.method,
			headers: {},
			params: {},
		};

		// Headers
		if (req.headers && isArray(req.headers)) {
			req.headers.foreach(header => {
				const { name, value } = header;
				if (name && value) {
					config.headers[name] = value;
				}
			});
		}

		// Params
		if (req.params && isArray(req.params)) {
			req.params.foreach(param => {
				const { name, value } = param;
				if (name && value) {
					config.params[name] = value;
				}
			});
		}

		// Auth
		if (req.token) {
			config.headers['Authorization'] = `Bearer ${req.token}`;
		}
		if (req.username && req.password) {
			try {
				const response = await axios.get(
					`http://localhost:8090/api/connector?url=${encodeURIComponent(req.url)}&username=${encodeURI(
						req.username
					)}&password=${encodeURI(req.password)}`
				);

				const result = this.processResponse(response);
				return Promise.resolve(result);

			} catch (error) {
				this.processError(error);
				return null;
			}
		} else {
			try {
				const response = await this.agent.request(config);

				const result = this.processResponse(response);
				return Promise.resolve(result);
			} catch (error) {
				this.processError(error);
				return null;
			}
		}
	}

	async serviceNowRequest(req) {
		const config = {
			baseURL: req.instance,
			method: 'GET',
			headers: {
				Authorization: `Basic username=${btoa(req.username)} password=${btoa(req.password)}`,
			},
		};

		try {
			const response = await this.agent.request(config);

			const result = this.processResponse(response);
			return Promise.resolve(result);
		} catch (error) {
			this.processError(error);
			return null;
		}
	}
}

const ServiceInstance = new CustomService('');

export default ServiceInstance;
export { ServiceInstance as CustomService };
