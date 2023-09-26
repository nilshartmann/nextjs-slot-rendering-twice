import Link from "next/link";

type UserDetailPageProps = {
  params: { userId: string };
};
export default function UserDetailPage({ params }: UserDetailPageProps) {
  return (
    <div>
      <h1>User Details for User with id {params.userId}</h1>
      <ul>
        <li>
          <Link href={"/user/1"} prefetch={false}>
            Goto User 1
          </Link>
        </li>
        <li>
          <Link href={"/user/2"} prefetch={false}>
            Goto User 2
          </Link>
        </li>
        <li>
          <Link href={"/user/3"} prefetch={false}>
            Goto User 3
          </Link>
        </li>
      </ul>
    </div>
  );
}

// same behaviour with generateStaticParams:
// export async function generateStaticParams() {
//   return [{ userId: "1" }, { userId: "2" }, { userId: "3" }, { userId: "4" }];
// }
