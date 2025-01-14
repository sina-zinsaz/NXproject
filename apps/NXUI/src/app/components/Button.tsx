type ButtonProps = {
  variant: 'primary' | 'secondary';
  rounded: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

export const Button = ({ variant, rounded, children }: ButtonProps) => {
  const color: Record<ButtonProps['variant'], { backgroundColor: string }> = {
    primary: { backgroundColor: 'white' },
    secondary: { backgroundColor: 'gray' },
  };

  const borderRadius: Record<ButtonProps['rounded'], string> = {
    small: '3px',
    medium: '6px',
    large: '20px',
  };

  return (
    <>
      <button
        style={{
          backgroundColor: color[variant].backgroundColor,
          borderRadius: borderRadius[rounded],
          cursor: 'pointer',
          marginRight: '20px',
        }}
      >
        {children}
      </button>
      <button
        style={{
          backgroundColor: color[variant].backgroundColor,
          borderRadius: borderRadius[rounded],
          cursor: 'pointer',
        }}
        disabled
      >
        {children}
      </button>
    </>
  );
};
