import { ERROR_MESSAGES_TO_ICONS } from '../../constants';

const ErrorDisplay = ({error}) => {
  const Icon = ERROR_MESSAGES_TO_ICONS[error.message];
    return (
      <div className="card error-card">
          <Icon className="icon sm" />
          <span className="text-lg font-medium">{error.message}</span>
        </div>
    );
}

export default ErrorDisplay