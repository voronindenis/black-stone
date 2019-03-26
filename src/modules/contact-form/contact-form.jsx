// @flow
import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { createBlock } from '@/utils/bem-helper';
import { PhoneInput } from '@/components/inputs/phone-input';
import { TextInput } from '@/components/inputs/text-input';
import { TextAreaInput } from '@/components/inputs/text-area-input';
import { Button } from '@/components/buttons/button';
import './assets/contact-form.sass';

const block = createBlock('contact-form');

export class ContactForm extends React.PureComponent<*> {
  render() {
    return (
      <Form className={block.block()}>
        <TextInput placeholder="Имя" className={block.element('name_field')} />
        <PhoneInput className={block.element('phone_field')} />
        <TextAreaInput className={block.element('text_field')} />
        <Button type="primary" label="Заказать звонок" fullWidth />
      </Form>
    );
  }
}
