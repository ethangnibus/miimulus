require "test_helper"

class NetgainControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get netgain_index_url
    assert_response :success
  end

  test "should get show" do
    get netgain_show_url
    assert_response :success
  end
end
