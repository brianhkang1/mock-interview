require 'byebug'
# Pry is included in case you'd like to run this file and test it,
# but you may remove it if you like.

def fibonacci(num)
  if n==0
    0
  elsif n==1
    1
  else
    fibonacci(n-1) + fibonacci(n-2)
  end
end

puts fibonacci(10)
