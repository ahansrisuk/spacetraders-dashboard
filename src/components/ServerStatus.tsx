import { FunctionComponent } from 'react';

interface StatusProps {
  online: boolean;
}
export const ServerStatus: FunctionComponent<StatusProps> = ({ online }) => {
  let message = '';
  if (online) {
    message = 'Server is online';
  } else {
    message = 'Server is not online';
  }

  return (
    <span
      className={`text-white rounded-full py-1 px-4 ${
        online ? 'bg-green-400' : 'bg-red-400'
      }`}
    >
      {message}
    </span>
  );
};

export default ServerStatus;
