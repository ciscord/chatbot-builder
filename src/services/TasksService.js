import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class TasksService extends BaseService {

  constructor(url) {
    super(url);
    this.list = this.list.bind(this);
    this.move = this.move.bind(this);
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

  async move(taskID, streamID) {
    const url = `/${taskID}/move`;
    try {
      const response = await this.agent.post(url, {
        stream_id: streamID,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }
}

const ServiceInstance = new TasksService(API_ROUTES.tasks);

export default ServiceInstance;
export { ServiceInstance as TasksService };
