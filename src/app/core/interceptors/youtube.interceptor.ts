import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class YoutubeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey = 'AIzaSyAUPVewMrPpeGvnPdmTU-l8ePI5WIZHfpM';
    const cloned = req.clone({ params: req.params.set('key', apiKey) });
    return next.handle(cloned);
  }
}
