import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = (props: PathOptions) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M16.7169 11.3152L17.669 10.3772C17.892 10.1576 18.2594 10.152 18.4898 10.3643C18.7203 10.577 18.7262 10.9271 18.5033 11.1467L16.5153 13.1048C16.4983 13.1278 16.4792 13.1499 16.4579 13.1708C16.3749 13.2529 16.2672 13.3083 16.1497 13.3295C15.9672 13.3662 15.7694 13.3187 15.6252 13.1858C15.5992 13.1619 15.5763 13.1362 15.5559 13.109L13.5102 11.2235C13.2797 11.0111 13.2738 10.6607 13.4967 10.4411C13.7196 10.2216 14.0874 10.2159 14.3178 10.4283L15.3045 11.3376L15.3041 11.3337L15.2569 6.02734C10.0811 6.40797 6 10.7325 6 16.0112C6 17.2808 6.23607 18.4951 6.66667 19.6127V17.3927C6.66667 16.9986 6.98609 16.6792 7.38012 16.6792H7.81982C9.39209 16.6792 10.6667 17.9538 10.6667 19.5261C10.6667 20.951 9.72303 22.1555 8.42658 22.5488C10.2604 24.6759 12.9731 26.0222 16 26.0222C18.9675 26.0222 21.6332 24.7282 23.4646 22.673C22.6394 22.5733 22 21.8705 22 21.0184V18.3452C22 17.4247 22.7462 16.6785 23.6667 16.6785C24.5871 16.6785 25.3333 17.4247 25.3333 18.3452V19.6127C25.7639 18.4951 26 17.2808 26 16.0112C26 10.7075 21.8803 6.36717 16.6698 6.02222L16.7169 11.3116V11.3152ZM8 18.0232V21.2841C8.7691 21.0694 9.33333 20.3636 9.33333 19.5261C9.33333 18.7512 8.75096 18.1123 8 18.0232ZM12.6667 16.6792C11.9303 16.6792 11.3333 17.2762 11.3333 18.0126V19.6818V21.351C11.3333 22.0874 11.9303 22.6844 12.6667 22.6844H14.6667V21.351H12.6667V20.3485H14.6667V19.0151H12.6667V18.0126H14.6667V16.6792H12.6667ZM17.3333 18.0126C16.9651 18.0126 16.6667 18.311 16.6667 18.6792V22.6851H15.3333V18.6792C15.3333 17.5747 16.2288 16.6792 17.3333 16.6792H18.3333H19.3333C20.4379 16.6792 21.3333 17.5747 21.3333 18.6792V22.6851H20V18.6792C20 18.311 19.7015 18.0126 19.3333 18.0126H19V22.6851H17.6667V18.0126H17.3333ZM24 18.3452V21.0184C24 21.2025 23.8508 21.3518 23.6667 21.3518C23.4826 21.3518 23.3333 21.2025 23.3333 21.0184V18.3452C23.3333 18.1611 23.4826 18.0118 23.6667 18.0118C23.8508 18.0118 24 18.1611 24 18.3452ZM12 14.6763C12 14.3077 12.2988 14.0089 12.6674 14.0089H19.3326C19.7012 14.0089 20 14.3077 20 14.6763C20 15.0449 19.7012 15.3437 19.3326 15.3437H12.6674C12.2988 15.3437 12 15.0449 12 14.6763Z"
    fill={props.iconPrimary}
  />
);

export const viewBox = '0 0 32 32';