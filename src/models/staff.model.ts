// src/app/models/staff.model.ts
export interface StaffMember {
  id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  // Add other properties as needed
}