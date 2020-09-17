import { header } from './header';
import { footer } from './footer';

const app = document.getElementById('app');
app.prepend(header());
app.appendChild(footer());
