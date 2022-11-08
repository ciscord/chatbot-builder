import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class DataflowsService extends BaseService {

  constructor(url) {
    super(url);
    this.getSystemTriggers = this.getSystemTriggers.bind(this);
    this.getSystemActions = this.getSystemActions.bind(this);
    this.getSystemOutputs = this.getSystemOutputs.bind(this);

    this.list = this.list.bind(this);
    this.preview = this.preview.bind(this);
  }

  async getSystemTriggers() {
    try {
      const response = await this.agent.get('/triggers');

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async getSystemActions() {
    try {
      const response = await this.agent.get('/actions');

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async getSystemOutputs() {
    try {
      const response = await this.agent.get('/outputs');

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async list(projectID) {
    try {
      const response = await this.agent.get('', {
        params: {
          project_id: projectID,
        },
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async preview(data = {}) {
    try {
      const response = await this.agent.post('/preview', data);

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }
}

const ServiceInstance = new DataflowsService(API_ROUTES.dataflows);

export default ServiceInstance;
export { ServiceInstance as DataflowsService };
