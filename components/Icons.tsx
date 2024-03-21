import {
  Info,
  LucideIcon,
  MoonStar,
  Sun,
  Check,
  MessageCircleMore,
  Mail,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

interopIcon(Info);
interopIcon(MoonStar);
interopIcon(Sun);
interopIcon(Check);
interopIcon(MessageCircleMore);
interopIcon(Mail);

export { Info, MoonStar, Sun, Check, MessageCircleMore, Mail };
