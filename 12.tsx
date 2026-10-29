type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: boolean;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// Results in: { darkMode: boolean; newUserProfile: boolean; }