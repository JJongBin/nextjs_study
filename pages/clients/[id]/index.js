import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjerctHandler() {
    // load data...
    // router.push('/clients/max/projectA');
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: 'max', clientProjectId: 'projectA' },
    });
  }

  return (
    <div>
      <h1>the Projects of a Given Client</h1>
      <button onClick={loadProjerctHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
