import { useQuery } from '@tanstack/react-query';

import { getRequestList } from '@api/FriendModal';
import { reactQueryKeys } from '@util/constants';

const useSendList = (userId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.SendList, userId],
    queryFn: () => getRequestList(userId),
  });
};

export default useSendList;
