import bp from '@gaiajs/gaiajs/app/lib/router/blueprint';
import BaseController from '@gaiajs/gaiajs/app/lib/router/controller';

@bp.controller({ downGradable: true })
export default class HomeController extends BaseController {
  @bp.get('/', { auth_required: false })
  async index() {
    return this.ctx.success({ user: this.ctx.user });
  }
}
