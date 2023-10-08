import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";
type AvatarProps = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

const Avatar = (props: AvatarProps) => {
  const { data: fetchedUser } = useUser(props.userId);
  const router = useRouter();
  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${props.userId}`;
      router.push(url);
    },
    [router, props.userId]
  );

  return (
    <div
      className={`
    ${props.hasBorder ? "border-4 border-black" : ""}
    ${props.isLarge ? "h-32" : "h-12"}
    ${props.isLarge ? "w-32" : "w-12"}
    rounded-full
    hover:opacity-90
    transition
    cursor-pointer
    relative
}`}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
