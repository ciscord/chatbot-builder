import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class AuthService extends BaseService {

  constructor(url) {
    super(url);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
  }

  async login(credentials) {
    try {
      const response = await this.agent.post('', {
        ...credentials,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async getProfile() {
    return this.list();
  }

  async refreshToken(refreshToken) {
    try {
      const response = await this.agent.put('', {
        token: refreshToken,
      });
      // const response = await this.agent.request('', {
      //   method: 'PUT',
      //   headers: {},
      //   data: {
      //     token: refreshToken,
      //   },
      // });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }
}

const ServiceInstance = new AuthService(API_ROUTES.auth);

export default ServiceInstance;
export { ServiceInstance as AuthService };
