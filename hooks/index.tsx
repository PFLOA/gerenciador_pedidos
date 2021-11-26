import React from 'react';

import { ToastProvider } from './toast';

const Hooks: React.FC = ({ children }) => <ToastProvider>{children}</ToastProvider>;

export default Hooks;
