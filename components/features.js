import {
  ChipIcon,
  FingerPrintIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Secure",
    icon: FingerPrintIcon,
  },
  {
    name: "Automated",
    icon: LightningBoltIcon,
  },
  {
    name: "Enterprise Hardware",
    icon: ChipIcon,
  },
];

function Features() {
  return (
    <>
    <p align="center">
    <img width="80px" height="80px" src="https://aurevocdn.xyz/branding/aurevo_blue_light.png" alt="Aurevo Logo">
    </img>
    </p>
      <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 ">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-medium dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
