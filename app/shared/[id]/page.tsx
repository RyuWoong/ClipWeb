function SharedPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return <div>Hello,{id}</div>;
}

export default SharedPage;
