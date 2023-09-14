import { useSelector } from 'react-redux';

import { getSessionData } from '@/entities/Session';

export const useAuth = () => useSelector(getSessionData);
