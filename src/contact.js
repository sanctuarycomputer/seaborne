import { header } from './header';
import { footer } from './footer';

const contact = document.createElement('div');
contact.appendChild(header());
contact.appendChild(footer());
document.body.appendChild(contact);
