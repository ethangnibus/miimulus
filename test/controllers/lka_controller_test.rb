require "test_helper"

class LkaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lka_index_url
    assert_response :success
  end

  test "should get show" do
    get lka_show_url
    assert_response :success
  end
end
