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
    const apiKey = 'key=AIzaSyALYkkvHJFoyOF2uTBn1dRcAn-NoDGEgrQ';
    const cloned = req.clone({
      url: req.url + apiKey,
    });
    return next.handle(cloned);
  }
}
