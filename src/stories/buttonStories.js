import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

storiesOf('Button', module)
  .add('defocus', () => <Button
    text="Close Shipment"
    style={{ background: '#0e50f0' , border: 'gray', cursor: 'not-allowed' }}
  />)
  .add('primary', () => <Button text="Close Shipment" />)
  .add('disabled', () => <Button disabled
    text="Disabled Button"
    style={{ background: '#d2e3fb' , border: 'gray', cursor: 'not-allowed' }}
  />)