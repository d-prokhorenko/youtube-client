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
    const apiKey = 'key=AIzaSyAUPVewMrPpeGvnPdmTU-l8ePI5WIZHfpM';
    const cloned = req.clone({
      url: req.url + apiKey,
    });
    return next.handle(cloned);
  }
}
