import { useRouter } from "next/router";
import { useCallback } from "react";

import { BiArrowBack } from "react-icons/bi";

type HeaderProps = {
  label: string;
  showBackArrow?: true;
};
const Header = (props: HeaderProps) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div
      className="
  border-b-[1px] border-neutral-800 p-5"
    >
      <div className="flex flex-row items-center gap-2">
        {props.showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="cursor-pointer
                hover:opacity-70
                transition
                "
          />
        )}
        <div className="text-white text-xl  font-semibold">{props.label}</div>
      </div>
    </div>
  );
};

export default Header;
