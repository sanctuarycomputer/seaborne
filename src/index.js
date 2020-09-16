import { main } from './main';
import { header } from './header';
import { footer } from './footer';

const app = document.createElement('div');
app.setAttribute('id', 'App');
app.appendChild(header());
app.appendChild(main());
app.appendChild(footer());
document.body.appendChild(app);
