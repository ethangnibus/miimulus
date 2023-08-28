require "test_helper"

class DreambreaksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dreambreaks_index_url
    assert_response :success
  end

  test "should get show" do
    get dreambreaks_show_url
    assert_response :success
  end
end
