interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    const updatedProfile = { ...profile, ...updates };
  
    return updatedProfile;
  }
  
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  
  const newProfile = updateProfile(myProfile, { age: 26 });
  
  console.log(newProfile);