function normalize(user) {
  const normalized = {
    gender: null,
    age: null,
    state: null
  };
  if (!user)
    return normalized;

  if (user.gender?.toUpperCase() === 'MALE' || user.gender?.toUpperCase() === 'M')
    normalized.gender = 'M';

  if (user.gender?.toUpperCase() === 'FEMALE' || user.gender?.toUpperCase() === 'F')
    normalized.gender = 'F';

  normalized.age = parseInt(user.age, 10);

  normalized.state = user.state?.toUpperCase();
  return normalized;
}

window.hbc = {};
window.hbc.imageNameForDemographic = (user) => {
 const normalizedUser = normalize(user);
  if (user.state === 'TX')
    return '1.jpg';
  if (user.state === 'MN' && user.age > 23)
    return '2.jpg';
  if (user.age > 70)
    return '3.jpg';
  if (user.age > 12 && user.age < 18 && ['DE', 'ME'].includes(user.state))
    return '4.jpg';
  if (user.gender === 'F' && (user.age > 23 && user.age < 30) || (user.age > 50 && user.age < 70))
    return '5.jpg';
  if (user.gender === 'M')
    return '1.jpg';
  return '6.jpg';
};
