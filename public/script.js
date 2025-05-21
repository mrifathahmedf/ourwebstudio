function toggleContent(id) {
  const section = document.getElementById(id);
  if (section.style.display === 'block') {
    section.style.display = 'none';
  } else {
    // সবগুলো বন্ধ কর
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(sec => sec.style.display = 'none');
    
    // শুধু এইটা দেখাও
    section.style.display = 'block';
  }
}