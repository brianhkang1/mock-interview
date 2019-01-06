def palindrome?(word)
  array = word.split("")
  array.each.with_index(1) do |letter, index|
    if letter != array[-index]
      return false
    end
  end

  return true
end

puts palindrome?("racecar")
puts palindrome?("noon")
puts palindrome?("five")
puts palindrome?("radar")
puts palindrome?("learnlovecode")
