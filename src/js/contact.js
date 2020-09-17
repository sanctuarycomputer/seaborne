import { header } from './header';
import { footer } from './footer';

const contact = document.getElementById('contact');
contact.prepend(header());
contact.appendChild(footer());
document.body.appendChild(contact);
