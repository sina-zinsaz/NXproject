type InputProps = {
  variant: 'primary' | 'secondary';
  type: 'text' | 'password' | 'email';
  rounded: 'small' | 'medium' | 'large';
  size: 'small' | 'medium' | 'large';
};

export default function Input({ variant, rounded, type, size }: InputProps) {
  const color: Record<InputProps['variant'], { backgroundColor: string }> = {
    primary: { backgroundColor: 'white' },
    secondary: { backgroundColor: '#0bd' },
  };

  const borderRadius: Record<InputProps['rounded'], string> = {
    small: '3px',
    medium: '6px',
    large: '20px',
  };

  const types: Record<InputProps['type'], string> = {
    text: 'text',
    password: 'password',
    email: 'email',
  };

  const sizes: Record<InputProps['size'], number> = {
    small: 5,
    medium: 10,
    large: 20,
  };

  return (
    <div>
      <input
        style={{
          backgroundColor: color[variant].backgroundColor,
          borderRadius: borderRadius[rounded],
        }}
        type={types[type]}
        size={sizes[size]}
      />
    </div>
  );
}
