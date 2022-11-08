import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class StreamsService extends BaseService {

  constructor(url) {
    super(url);
    this.list = this.list.bind(this);
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
}

const ServiceInstance = new StreamsService(API_ROUTES.streams);

export default ServiceInstance;
export { ServiceInstance as StreamsService };
