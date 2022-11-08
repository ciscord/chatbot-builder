import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class ProjectsService extends BaseService {
  // Here you can implement methods that are not presented in the base class
  // Do not forget to bind these custom methods in the constructor
}

const ServiceInstance = new ProjectsService(API_ROUTES.projects);

export default ServiceInstance;
export { ServiceInstance as ProjectsService };
