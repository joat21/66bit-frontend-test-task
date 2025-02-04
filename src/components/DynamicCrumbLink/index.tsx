import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

interface DynamicCrumbLinkProps<TData, TPayload> {
  to: string;
  payload: TPayload;
  queryKey: (payload: TPayload) => string[];
  queryFn: (payload: TPayload) => Promise<TData>;
  getLinkText: (data: TData | undefined) => string;
}

export const DynamicCrumbLink = <TData, TPayload>(
  props: DynamicCrumbLinkProps<TData, TPayload>
) => {
  const { to, payload, queryKey, queryFn, getLinkText } = props;

  const { data } = useQuery({
    queryKey: queryKey(payload),
    queryFn: () => queryFn(payload),
  });

  return <Link to={to}>{getLinkText(data)}</Link>;
};
