import { API_ROUTES } from '../constants/routes';
import { BaseService } from './BaseService';

class UsersService extends BaseService {

  constructor(url) {
    super(url);
    this.signUp = this.signUp.bind(this);
    this.verify = this.verify.bind(this);
    this.sendVerify = this.sendVerify.bind(this);
    this.sendReset = this.sendReset.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  async signUp(credentials) {
    try {
      const response = await this.agent.post('/signup', {
        ...credentials,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async verify(token) {
    try {
      const response = await this.agent.post('/verify', {
        token,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async sendVerify(email) {
    try {
      const response = await this.agent.put('/verify', {
        email,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async sendReset(email) {
    try {
      const response = await this.agent.put('/password/reset', {
        email,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }

  async resetPassword(credentials) {
    try {
      const response = await this.agent.post('/password/reset', {
        ...credentials,
      });

      const result = this.processResponse(response);
      return Promise.resolve(result);

    } catch (error) {
      this.processError(error);
      return null;
    }
  }
}

const ServiceInstance = new UsersService(API_ROUTES.users);

export default ServiceInstance;
export { ServiceInstance as UsersService };
