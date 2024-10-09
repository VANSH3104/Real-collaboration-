import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-3">
          <div>
            login sucessfull welcome back
          </div>
          <div>
            <UserButton />
          </div>
      </div>
    </div>
  );
}
