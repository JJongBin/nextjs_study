import { useRouter } from 'next/router';

function portfolieProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>the portfolie ProjectPage Page</h1>
    </div>
  );
}

export default portfolieProjectPage;
