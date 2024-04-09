'use client';
import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';

import {fetchServer} from '@/lib/net/fetch/fetch';

export type RefData = {
  created_at: string;
  user_id: number;
  author_id: number;
  author_upline: number;
  author_address: string;
  author_email: string;
  lvl: number;
  dimp: number;
};

const useRefs = (size = 20) => {
  const [page, setPage] = useState(0);

  const query = useQuery<PaginatedResponse<RefData>>({
    queryKey: ['refs', {page, size}],
    queryFn: async ctx => {
      const response = await fetchServer(
        ctx.pageParam || `/users/ref/?page=${page + 1}&size=${size}`
      );

      return response;
    },
    keepPreviousData: true,
  });

  return {...query, total: query.data?.count ?? 0, page, setPage} as const;
};

export default useRefs;